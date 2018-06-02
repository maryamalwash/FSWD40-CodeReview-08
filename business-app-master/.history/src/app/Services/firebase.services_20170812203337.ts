import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
    businesses: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private af: AngularFireDatabase) {

    }

    getBusinesses(category: string = null) {
        if (category != null) {
            this.businesses = this.af.list('/businesses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as FirebaseListObservable<Business[]>;
        } else {
            this.businesses = this.af.list('/businesses') as FirebaseListObservable<Business[]>;

        }
        return this.businesses;
    }

    getCategories() {
        this.categories = this.af.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categories;
    }

    addBusiness(newBusiness) {
        return this.businesses.push(newBusiness);
    }
}

export interface Business {
    $key?: string;
    company?: string; // ? means optional
    description?: string;
    category: string;
    years_in_business?: number;
    street_address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    phone?: string;
    email?: string;
    created_at: string;
}

export interface Category {
    $key?: string;
    name?: string;
}