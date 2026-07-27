import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-open-tibia');
}

export default function XanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-open-tibia" />;
}
