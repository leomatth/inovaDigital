import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.html',
  styleUrl: './cases.css',
})
export class Cases {
  protected readonly cases = [
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'E-commerce',
      title: 'TechStore Online',
      description: 'Scaled an e-commerce brand from $50K to $200K monthly revenue through a multi-channel digital strategy.',
      metrics: [
        { value: '+200%', label: 'Organic Traffic' },
        { value: '+150%', label: 'Online Sales' },
        { value: '4.8x', label: 'ROAS' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      category: 'SaaS',
      title: 'CloudSync Platform',
      description: 'Helped a B2B SaaS company reduce CAC by 60% while tripling their monthly qualified leads pipeline.',
      metrics: [
        { value: '+320%', label: 'Qualified Leads' },
        { value: '-60%', label: 'Cost per Lead' },
        { value: '+180%', label: 'Conversions' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      category: 'Healthcare',
      title: 'MedConnect Clinic',
      description: 'Built a dominant local SEO presence and patient acquisition funnel for a healthcare provider network.',
      metrics: [
        { value: '+400%', label: 'Website Traffic' },
        { value: '+250%', label: 'Appointments' },
        { value: '#1', label: 'Local Ranking' },
      ],
    },
  ];
}
