import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Boost your organic rankings with data-driven SEO strategies. We optimize your website structure, content, and authority to drive sustainable traffic growth.',
      features: ['Technical SEO Audits', 'Keyword Research', 'Link Building', 'Content Strategy'],
    },
    {
      icon: '🎯',
      title: 'Paid Traffic',
      description: 'Maximize ROI with precision-targeted Google Ads and Meta Ads campaigns. We turn ad spend into predictable, scalable revenue for your business.',
      features: ['Google Ads', 'Meta Ads', 'Retargeting', 'Landing Pages'],
    },
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Build a loyal community with engaging content strategies across all major platforms. We handle everything from content creation to community management.',
      features: ['Content Calendar', 'Community Management', 'Influencer Outreach', 'Brand Voice'],
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Make informed decisions with comprehensive analytics dashboards. Track every metric that matters and understand your customer journey end-to-end.',
      features: ['Custom Dashboards', 'Conversion Tracking', 'A/B Testing', 'Monthly Reports'],
    },
  ];
}
