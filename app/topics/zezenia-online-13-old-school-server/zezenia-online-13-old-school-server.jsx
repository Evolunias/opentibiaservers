import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-old-school-server');
}

export default function ZezeniaOnline13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-old-school-server" />;
}
