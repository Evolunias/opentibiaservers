import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-tibia');
}

export default function XanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-tibia" />;
}
