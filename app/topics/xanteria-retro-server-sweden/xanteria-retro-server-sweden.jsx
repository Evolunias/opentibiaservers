import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-sweden');
}

export default function XanteriaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-sweden" />;
}
