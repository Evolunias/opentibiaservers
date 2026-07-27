import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-tibia');
}

export default function ZaneraTibiaKeywordPage() {
  return <StaticKeywordPage slug="zanera-tibia" />;
}
