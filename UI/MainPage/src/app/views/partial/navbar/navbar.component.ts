import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('dropdown')
  dropdown!: ElementRef;
  greeting: string = '';
  userName: string = '';
  email: string = '';
  user_id: string = '';
  public profileDetails: any = {};
  ImageCroppedEvent: any;
  public userIcon = '';
  contact: string = '';
  changeProfilePic: boolean = false;
  showProfileSection: boolean = false;
  showProfileBtnClicked: boolean = false;
  currentRoute: string | undefined;

  constructor(
    private router: Router
  ) {
    
  }
  imageChangedEvent: any = '';
  croppedImage: any = '';
  fileName: any= undefined;
  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      let url = val['url'];
    });    
  }
  navigateTo(data: string) {
    this.showProfileBtnClicked = false;
    this.showProfileSection = false;
    this.router.navigate([this.router.url.split('/')[0] + data]);
  }
  uploadImage() {}
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: { base64: string; }) {
    this.croppedImage = event.base64.split(',')[1];
  }
  imageLoaded() {
    /* show cropper */
  }
  cropperReady() {
    /* cropper ready */
  }
  loadImageFailed() {
    /* show message */
  }
  
  changeProfilePicFun() {
    this.changeProfilePic = !this.changeProfilePic;
  }
  openProfile() {
    this.showProfileBtnClicked = true;
    this.showProfileSection = !this.showProfileSection;
  }
  closeProfile() {
    // this.showProfileSection = false;
  }
  handleChangeProfile() {
    // console.log(this.showProfileBtnClicked);
    // console.log(this.dropdown.nativeElement.contains(event.target));
   
  }

}
