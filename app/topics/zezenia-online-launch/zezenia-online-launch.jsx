import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-launch');
}

export default function ZezeniaOnlineLaunchKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-launch" />;
}
