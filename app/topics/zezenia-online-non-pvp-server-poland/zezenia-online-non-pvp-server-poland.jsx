import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-poland');
}

export default function ZezeniaOnlineNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-poland" />;
}
