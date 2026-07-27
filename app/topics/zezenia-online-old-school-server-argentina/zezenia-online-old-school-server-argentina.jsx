import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-argentina');
}

export default function ZezeniaOnlineOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-argentina" />;
}
