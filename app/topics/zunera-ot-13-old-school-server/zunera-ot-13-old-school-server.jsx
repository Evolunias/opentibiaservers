import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-old-school-server');
}

export default function ZuneraOt13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-old-school-server" />;
}
