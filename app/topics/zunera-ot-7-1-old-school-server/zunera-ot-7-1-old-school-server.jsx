import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-old-school-server');
}

export default function ZuneraOt71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-old-school-server" />;
}
