import { prisma } from "@/lib/db";
import { stripe } from "@/lib/dtripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req:Request){
    const body=await req.text();
    const signature = headers().get('Stripe-Signature') as string
    let event:Stripe.Event
    try {
        event = stripe.webhooks.constructEvent(
                body,signature,
                process.env.STRIPE_WEBHOOK_SECRET as string
        )
    } catch (error) {
        return new NextResponse('webhook error',{status:400})
    }
    const session=event.data.object as Stripe.Checkout.Session
    if(event.type === 'checkout.session.completed'){
            const sub=await stripe.subscriptions.retrieve(session.subscription as string)
            if(!session?.metadata?.userId){
                    return new NextResponse('webhook error no userid',{status:400})
            }
            await prisma.userSubscription.create({
                data:{
                    userId: session.metadata.userId,
                    stripeSubscriptionId: sub.id,
                    stripeCustomerId: sub.customer as string,
                    stripePriceId: sub.items.data[0].price.id,
                    stripeCurrentPeriodEnd: new Date(
                      sub.current_period_end * 1000
                    ),
                  },
                });
                }
                if (event.type==='invoice.payment_succeeded'){
                    const subcription = await stripe.subscriptions.retrieve(
                        session.subscription as string
                      );
                      await prisma.userSubscription.update({
                        where: {
                          stripeSubscriptionId: subcription.id,
                        },
                        data: {
                          stripePriceId: subcription.items.data[0].price.id,
                          stripeCurrentPeriodEnd: new Date(subcription.current_period_end * 1000),
                        },
                      });
                    }
                    return new NextResponse(null, { status: 200 });
}
