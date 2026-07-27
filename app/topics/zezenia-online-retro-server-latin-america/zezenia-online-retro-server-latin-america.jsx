import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-latin-america');
}

export default function ZezeniaOnlineRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-latin-america" />;
}
