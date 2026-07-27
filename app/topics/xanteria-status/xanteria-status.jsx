import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-status');
}

export default function XanteriaStatusKeywordPage() {
  return <StaticKeywordPage slug="xanteria-status" />;
}
