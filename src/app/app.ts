import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Cases } from './components/cases/cases';
import { Clients } from './components/clients/clients';
import { Testimonials } from './components/testimonials/testimonials';
import { CtaBanner } from './components/cta-banner/cta-banner';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, Cases, Clients, Testimonials, CtaBanner, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
