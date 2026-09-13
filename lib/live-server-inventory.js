import liveInventory from '../data/live-server-inventory.json';
import { collapseCanonicalServers } from './server-identity.js';

let canonicalInventory;

export function getLiveInventoryServers() {
  if (!canonicalInventory) canonicalInventory = collapseCanonicalServers(liveInventory.servers || []);
  return canonicalInventory;
}

export function getLiveInventoryServerBySlug(slug) {
  return getLiveInventoryServers().find((server) => server.slug === slug) || null;
}
