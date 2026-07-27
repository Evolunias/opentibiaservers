import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-sweden');
}

export default function ZezeniaOnlineOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-sweden" />;
}
