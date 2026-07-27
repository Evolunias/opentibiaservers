import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-uk-servers');
}

export default function XanteriaUkServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-uk-servers" />;
}
