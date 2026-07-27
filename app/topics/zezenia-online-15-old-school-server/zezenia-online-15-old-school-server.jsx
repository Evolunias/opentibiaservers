import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-old-school-server');
}

export default function ZezeniaOnline15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-old-school-server" />;
}
