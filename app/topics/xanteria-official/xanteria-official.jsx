import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-official');
}

export default function XanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="xanteria-official" />;
}
