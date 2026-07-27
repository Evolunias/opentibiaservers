import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-mexico');
}

export default function ZezeniaOnlinePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-mexico" />;
}
