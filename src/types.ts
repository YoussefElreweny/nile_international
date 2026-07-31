/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Company {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  mission: string;
  industries: string[];
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  company: string;
  image?: string;
}

export interface NavLink {
  label: string;
  path: string;
}
