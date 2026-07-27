import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-14-old-school-server');
}

export default function ZezeniaOnline14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-14-old-school-server" />;
}
