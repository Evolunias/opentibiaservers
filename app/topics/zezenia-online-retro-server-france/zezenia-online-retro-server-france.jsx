import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-france');
}

export default function ZezeniaOnlineRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-france" />;
}
