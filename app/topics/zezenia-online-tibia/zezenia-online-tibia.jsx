import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-tibia');
}

export default function ZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-tibia" />;
}
