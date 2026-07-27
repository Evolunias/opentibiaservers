import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-brazil');
}

export default function ZezeniaOnlineOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-brazil" />;
}
