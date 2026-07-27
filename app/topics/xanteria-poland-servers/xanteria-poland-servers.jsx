import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-poland-servers');
}

export default function XanteriaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-poland-servers" />;
}
