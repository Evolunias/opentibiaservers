import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-tibia-world');
}

export default function ZaneraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="zanera-tibia-world" />;
}
