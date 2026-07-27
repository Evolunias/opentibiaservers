import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-launcher');
}

export default function ZezeniaOnlineLauncherKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-launcher" />;
}
