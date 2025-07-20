import { Routes } from '@angular/router';
import { LandingPageComponent } from './../app/landingpage/landingPage.component';
import { MusikComponent } from './../app/lineup/musik/musik.component';
import { WorkshopsComponent } from './lineup/workshops/workshops.component';
import { DrummherumComponent } from './lineup/drummherum/drummherum.component';
import { PfannenwendeComponent } from './info/pfannenwende/pfannenwende.component';
import { AnreiseComponent } from './info/anreise/anreise.component';
import { LageplanComponent } from './info/lageplan/lageplan.component';
import { TicketsComponent } from './tickets/tickets.component';

//import { Component } from '@angular/core';
//import { LineupComponent } from './lineup/lineup.component';
//import { InfoComponent } from './info/info.component';
//import { TicketsComponent } from './tickets/tickets.component';
//import { InselfestComponent } from './inselfest/inselfest.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'musik', component: MusikComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'drummherum', component: DrummherumComponent },
  { path: 'pfannenwende', component: PfannenwendeComponent },
  { path: 'anreise', component: AnreiseComponent },
  { path: 'lageplan', component: LageplanComponent},
  { path: 'tickets', component: TicketsComponent},
  // { path: 'inselfest', component: InselfestComponent }
];
