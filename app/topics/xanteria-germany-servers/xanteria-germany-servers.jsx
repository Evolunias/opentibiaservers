import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-germany-servers');
}

export default function XanteriaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-germany-servers" />;
}
