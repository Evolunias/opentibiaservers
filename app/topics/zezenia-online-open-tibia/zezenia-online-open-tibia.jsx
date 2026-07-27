import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-open-tibia');
}

export default function ZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-open-tibia" />;
}
