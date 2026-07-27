import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fun-server');
}

export default function XanteriaFunServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fun-server" />;
}
