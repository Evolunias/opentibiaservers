import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-old-school-server');
}

export default function ZuneraOt100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-old-school-server" />;
}
