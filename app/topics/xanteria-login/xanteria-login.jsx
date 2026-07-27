import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-login');
}

export default function XanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="xanteria-login" />;
}
