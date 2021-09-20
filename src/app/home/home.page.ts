import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  async write(filename) {
    await Filesystem.writeFile({
      path: filename,
      data: "It Works",
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  };

  async read(filename) {
    const contents = await Filesystem.readFile({
      path: filename,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    alert(contents.data);
  };
}
