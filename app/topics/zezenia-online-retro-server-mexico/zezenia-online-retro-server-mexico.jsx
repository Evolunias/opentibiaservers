import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-mexico');
}

export default function ZezeniaOnlineRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-mexico" />;
}
