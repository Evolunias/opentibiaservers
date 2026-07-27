import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-usa-servers');
}

export default function XanteriaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-usa-servers" />;
}
