import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-training');
}

export default function ZezeniaOnlineTrainingKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-training" />;
}
