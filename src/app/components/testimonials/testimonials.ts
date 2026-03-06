import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  protected readonly testimonials = [
    {
      quote: 'Inova Digital completely transformed our online presence. Within 6 months, our organic traffic grew by 300% and our sales pipeline has never been stronger. They truly understand digital growth.',
      name: 'Sarah Johnson',
      role: 'CEO, TechStore Online',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote: 'The paid advertising campaigns they built for us deliver a consistent 5x ROAS. Their team is incredibly data-driven and transparent — we always know exactly where our budget is going.',
      name: 'Marcus Chen',
      role: 'CMO, CloudSync Platform',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 5,
    },
    {
      quote: 'Our social media went from virtually invisible to a lead generation machine. Their content strategy and community management is world-class. Highly recommend for any business looking to grow.',
      name: 'Emily Rodriguez',
      role: 'Founder, MedConnect',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      rating: 5,
    },
  ];
}
