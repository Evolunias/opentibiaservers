import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-germany');
}

export default function ZezeniaOnlineOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-germany" />;
}
