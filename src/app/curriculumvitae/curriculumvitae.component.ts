import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-curriculumvitae',
  templateUrl: './curriculumvitae.component.html',
  styleUrls: ['./curriculumvitae.component.scss']
})
export class CurriculumvitaeComponent implements OnInit {

  constructor(
    private readonly translateService: TranslateService,

  ) { }

  ngOnInit(): void {

    this.translateService.instant()
  }

}
