import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-uk-server');
}

export default function XanteriaUkServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-uk-server" />;
}
