import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "https://www.ocregister.com/wp-content/uploads/migration/kpj/kpjwax-30movironman26large.jpg?w=620"
  contentTitle: string = ""
  contentDescription: string = ""
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setaluesToComponent(this.id)
  }

  setaluesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
}
