import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { FooterComponent } from "./footer/footer.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    FooterComponent,
    CarouselComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
