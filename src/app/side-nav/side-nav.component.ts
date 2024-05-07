import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'fun-side-nav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  public sidenavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  public profilePicSize = computed(() =>
    this.sidenavCollapsed() ? '32' : '100'
  );

  public menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'video_library', label: 'Content', route: 'content' },
    { icon: 'analytics', label: 'Analytics', route: 'analytics' },
    { icon: 'comment', label: 'Comments', route: 'comments' },
  ]);
}
