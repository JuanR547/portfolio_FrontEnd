import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent {
  persona: persona = new persona("Juan Ignacio", "Reynoso", "../../../assets/img/perfil.jpg");

  constructor (public personaService: PersonaService) {}

  ngOnInIt(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}
