import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly formData = signal({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  protected readonly submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 4000);
    this.formData.set({ name: '', email: '', phone: '', message: '' });
  }

  updateField(field: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.formData.update(data => ({ ...data, [field]: value }));
  }
}
