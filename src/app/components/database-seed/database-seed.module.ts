import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagService } from '@sage-bionetworks/rocc-client-angular';
import { DatabaseSeedComponent } from './database-seed.component';

@NgModule({
  declarations: [DatabaseSeedComponent],
  imports: [CommonModule],
  exports: [DatabaseSeedComponent],
  providers: [TagService]
})
export class DatabaseSeedModule {}
