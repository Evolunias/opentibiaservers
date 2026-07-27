import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-usa');
}

export default function ZezeniaOnlineOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-usa" />;
}
